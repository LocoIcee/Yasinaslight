import React, { useState, useEffect, useRef } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import { Button } from '../../../components/ui/button';
import { Calendar as CalendarIcon } from 'lucide-react';
import EventModal from './EventModal';
import { getEvents, createEvent, updateEvent, deleteEvent } from './GoogleCalendarAPI';
import { formatEventsForCalendar, getRandomColor } from './CalendarUtils';

const Calendar = ({ isAuthenticated, onLoginRequest }) => {
  const [events, setEvents] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [view, setView] = useState('dayGridMonth');
  const calendarRef = useRef(null);
  
  // Fetch events from Google Calendar when authenticated
  useEffect(() => {
    if (isAuthenticated) {
      fetchEvents();
    }
  }, [isAuthenticated]);

  const fetchEvents = async () => {
    try {
      setIsLoading(true);
      const googleEvents = await getEvents();
      const formattedEvents = formatEventsForCalendar(googleEvents);
      setEvents(formattedEvents);
    } catch (error) {
      console.error('Failed to fetch events:', error);
    } finally {
      setIsLoading(false);
    }
  };

  // Handle date click for creating new events
  const handleDateClick = (info) => {
    if (!isAuthenticated) {
      onLoginRequest();
      return;
    }
    
    const newEvent = {
      start: info.date,
      end: new Date(new Date(info.date).setHours(info.date.getHours() + 1)),
      allDay: info.allDay,
      backgroundColor: getRandomColor(),
      borderColor: getRandomColor(),
    };
    
    setSelectedEvent(newEvent);
    setShowModal(true);
  };

  // Handle existing event click
  const handleEventClick = (info) => {
    if (!isAuthenticated) {
      onLoginRequest();
      return;
    }
    
    const event = {
      id: info.event.id,
      title: info.event.title,
      start: info.event.start,
      end: info.event.end || new Date(new Date(info.event.start).setHours(info.event.start.getHours() + 1)),
      description: info.event.extendedProps.description || '',
      location: info.event.extendedProps.location || '',
      backgroundColor: info.event.backgroundColor,
      borderColor: info.event.borderColor,
      allDay: info.event.allDay,
    };
    
    setSelectedEvent(event);
    setShowModal(true);
  };

  // Handle event dragging and resizing
  const handleEventChange = async (info) => {
    if (!isAuthenticated) {
      onLoginRequest();
      info.revert();
      return;
    }
    
    const updatedEvent = {
      id: info.event.id,
      title: info.event.title,
      start: info.event.start,
      end: info.event.end,
      description: info.event.extendedProps.description || '',
      location: info.event.extendedProps.location || '',
      allDay: info.event.allDay,
    };
    
    try {
      await updateEvent(updatedEvent);
      // Refresh events from Google Calendar
      fetchEvents();
    } catch (error) {
      console.error('Failed to update event:', error);
      info.revert();
    }
  };

  // Handle event save from modal
  const handleSaveEvent = async (eventData) => {
    if (!isAuthenticated) {
      onLoginRequest();
      return;
    }
    
    try {
      setIsLoading(true);
      
      if (eventData.id) {
        // Update existing event
        await updateEvent(eventData);
      } else {
        // Create new event
        await createEvent(eventData);
      }
      
      // Refresh events from Google Calendar
      fetchEvents();
      setShowModal(false);
    } catch (error) {
      console.error('Failed to save event:', error);
    } finally {
      setIsLoading(false);
    }
  };

  // Handle event deletion
  const handleDeleteEvent = async (eventId) => {
    if (!isAuthenticated) {
      onLoginRequest();
      return;
    }
    
    if (!eventId) {
      setShowModal(false);
      return;
    }
    
    try {
      setIsLoading(true);
      await deleteEvent(eventId);
      // Refresh events from Google Calendar
      fetchEvents();
      setShowModal(false);
    } catch (error) {
      console.error('Failed to delete event:', error);
    } finally {
      setIsLoading(false);
    }
  };

  // Handle view change
  const handleViewChange = (view) => {
    setView(view);
    if (calendarRef.current) {
      calendarRef.current.getApi().changeView(view);
    }
  };

  return (
    <div className="calendar-container p-4">
      <div className="flex justify-between items-center mb-6">
        <div className="flex space-x-2 items-center">
          <Button 
            variant={view === 'dayGridMonth' ? 'default' : 'outline'}
            onClick={() => handleViewChange('dayGridMonth')}
          >
            Month
          </Button>
          <Button 
            variant={view === 'timeGridWeek' ? 'default' : 'outline'}
            onClick={() => handleViewChange('timeGridWeek')}
          >
            Week
          </Button>
          <Button 
            variant={view === 'timeGridDay' ? 'default' : 'outline'}
            onClick={() => handleViewChange('timeGridDay')}
          >
            Day
          </Button>
        </div>
        <div>
          {!isAuthenticated && (
            <Button 
              variant="default" 
              onClick={onLoginRequest}
              className="flex items-center space-x-2"
            >
              <CalendarIcon size={16} />
              <span>Connect to Google Calendar</span>
            </Button>
          )}
          {isAuthenticated && (
            <Button 
              variant="outline" 
              onClick={() => handleDateClick({ date: new Date(), allDay: false })}
              className="flex items-center space-x-2"
            >
              <CalendarIcon size={16} />
              <span>Add Event</span>
            </Button>
          )}
        </div>
      </div>

      {isLoading && (
        <div className="flex justify-center items-center h-12 mb-4">
          <div className="animate-spin rounded-full h-6 w-6 border-t-2 border-b-2 border-purple-600"></div>
          <span className="ml-2">Loading calendar...</span>
        </div>
      )}

      <div className={`calendar-wrapper ${isLoading ? 'opacity-50' : ''}`}>
        <FullCalendar
          ref={calendarRef}
          plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
          initialView={view}
          headerToolbar={{
            left: 'prev,next today',
            center: 'title',
            right: '',
          }}
          events={events}
          editable={isAuthenticated}
          selectable={isAuthenticated}
          selectMirror={true}
          dayMaxEvents={true}
          weekends={true}
          dateClick={handleDateClick}
          eventClick={handleEventClick}
          eventChange={handleEventChange}
          eventTimeFormat={{
            hour: 'numeric',
            minute: '2-digit',
            meridiem: 'short'
          }}
          height="auto"
          contentHeight={800}
        />
      </div>

      {showModal && (
        <EventModal
          event={selectedEvent}
          onClose={() => setShowModal(false)}
          onSave={handleSaveEvent}
          onDelete={handleDeleteEvent}
          isLoading={isLoading}
        />
      )}
    </div>
  );
};

export default Calendar;