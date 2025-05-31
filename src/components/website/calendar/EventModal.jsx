import React, { useState, useEffect } from 'react';
import { 
  Dialog, 
  DialogContent, 
  DialogHeader, 
  DialogTitle, 
  DialogFooter 
} from '../../../components/ui/dialog';
import { Button } from '../../../components/ui/button';
import { Input } from '../../../components/ui/input';
import { Label } from '../../../components/ui/label';
import { Textarea } from '../../../components/ui/textarea';
import { Checkbox } from '../../../components/ui/checkbox';
import { CalendarIcon, MapPin, AlignLeft, X, Trash2 } from 'lucide-react';
import { format } from 'date-fns';
import { Calendar } from '../../../components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '../../../components/ui/popover';
import { cn } from '../../../lib/utils';

const EventModal = ({ event, onClose, onSave, onDelete, isLoading }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [location, setLocation] = useState('');
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');
  const [allDay, setAllDay] = useState(false);
  
  const isNewEvent = !event?.id;
  
  // Initialize form with event data if editing an existing event
  useEffect(() => {
    if (event) {
      setTitle(event.title || '');
      setDescription(event.description || '');
      setLocation(event.location || '');
      setAllDay(event.allDay || false);
      
      // Handle start date and time
      if (event.start) {
        const start = new Date(event.start);
        setStartDate(start);
        if (!event.allDay) {
          setStartTime(format(start, 'HH:mm'));
        }
      }
      
      // Handle end date and time
      if (event.end) {
        const end = new Date(event.end);
        setEndDate(end);
        if (!event.allDay) {
          setEndTime(format(end, 'HH:mm'));
        }
      } else if (event.start) {
        // Default end time is 1 hour after start time if not provided
        const end = new Date(event.start);
        end.setHours(end.getHours() + 1);
        setEndDate(end);
        if (!event.allDay) {
          setEndTime(format(end, 'HH:mm'));
        }
      }
    }
  }, [event]);
  
  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validate form inputs
    if (!title.trim()) {
      alert('Please enter an event title');
      return;
    }
    
    // Prepare date objects
    let start = new Date(startDate);
    let end = new Date(endDate);
    
    if (!allDay) {
      // Parse time strings and apply to dates
      if (startTime) {
        const [hours, minutes] = startTime.split(':').map(Number);
        start.setHours(hours, minutes);
      }
      
      if (endTime) {
        const [hours, minutes] = endTime.split(':').map(Number);
        end.setHours(hours, minutes);
      } else {
        // If no end time, default to 1 hour after start time
        end = new Date(start);
        end.setHours(end.getHours() + 1);
      }
    } else {
      // For all-day events, set times appropriately
      start.setHours(0, 0, 0, 0);
      end.setHours(23, 59, 59, 999);
    }
    
    // Validate that end time is after start time
    if (end <= start) {
      alert('End time must be after start time');
      return;
    }
    
    // Prepare event data
    const eventData = {
      id: event?.id, // Will be undefined for new events
      title,
      description,
      location,
      start,
      end,
      allDay,
      backgroundColor: event?.backgroundColor || '#4ECDC4',
      borderColor: event?.borderColor || '#4ECDC4',
    };
    
    onSave(eventData);
  };

  return (
    <Dialog open={true} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle className="text-xl font-semibold" style={{ color: "#563D7C" }}>
            {isNewEvent ? 'Create Event' : 'Edit Event'}
          </DialogTitle>
          <Button 
            variant="ghost" 
            size="icon" 
            className="absolute right-4 top-4" 
            onClick={onClose}
          >
            <X className="h-4 w-4" />
          </Button>
        </DialogHeader>
        
        <form onSubmit={handleSubmit}>
          <div className="grid gap-4 py-4">
            {/* Event Title */}
            <div className="grid w-full items-center gap-1.5">
              <Label htmlFor="title" className="text-sm font-medium">
                Event Title*
              </Label>
              <Input
                id="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Add title"
                required
              />
            </div>
            
            {/* All Day Toggle */}
            <div className="flex items-center gap-2">
              <Checkbox 
                id="allDay" 
                checked={allDay}
                onCheckedChange={setAllDay}
              />
              <Label htmlFor="allDay" className="text-sm font-medium cursor-pointer">
                All day
              </Label>
            </div>
            
            {/* Start Date and Time */}
            <div className="grid grid-cols-2 gap-4">
              <div className="grid gap-1.5">
                <Label htmlFor="startDate" className="text-sm font-medium">
                  Start Date
                </Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className={cn(
                        "w-full justify-start text-left font-normal",
                        !startDate && "text-muted-foreground"
                      )}
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {startDate ? format(startDate, "PPP") : "Pick a date"}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0">
                    <Calendar
                      mode="single"
                      selected={startDate}
                      onSelect={(date) => date && setStartDate(date)}
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
              </div>
              
              {!allDay && (
                <div className="grid gap-1.5">
                  <Label htmlFor="startTime" className="text-sm font-medium">
                    Start Time
                  </Label>
                  <Input
                    id="startTime"
                    type="time"
                    value={startTime}
                    onChange={(e) => setStartTime(e.target.value)}
                  />
                </div>
              )}
            </div>
            
            {/* End Date and Time */}
            <div className="grid grid-cols-2 gap-4">
              <div className="grid gap-1.5">
                <Label htmlFor="endDate" className="text-sm font-medium">
                  End Date
                </Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className={cn(
                        "w-full justify-start text-left font-normal",
                        !endDate && "text-muted-foreground"
                      )}
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {endDate ? format(endDate, "PPP") : "Pick a date"}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0">
                    <Calendar
                      mode="single"
                      selected={endDate}
                      onSelect={(date) => date && setEndDate(date)}
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
              </div>
              
              {!allDay && (
                <div className="grid gap-1.5">
                  <Label htmlFor="endTime" className="text-sm font-medium">
                    End Time
                  </Label>
                  <Input
                    id="endTime"
                    type="time"
                    value={endTime}
                    onChange={(e) => setEndTime(e.target.value)}
                  />
                </div>
              )}
            </div>
            
            {/* Location */}
            <div className="grid w-full items-center gap-1.5">
              <Label htmlFor="location" className="text-sm font-medium flex items-center">
                <MapPin className="h-4 w-4 mr-1" />
                Location
              </Label>
              <Input
                id="location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                placeholder="Add location"
              />
            </div>
            
            {/* Description */}
            <div className="grid w-full items-center gap-1.5">
              <Label htmlFor="description" className="text-sm font-medium flex items-center">
                <AlignLeft className="h-4 w-4 mr-1" />
                Description
              </Label>
              <Textarea
                id="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Add description"
                rows={3}
              />
            </div>
          </div>
          
          <DialogFooter className="flex justify-between">
            {!isNewEvent && (
              <Button
                type="button"
                variant="destructive"
                onClick={() => onDelete(event.id)}
                disabled={isLoading}
                className="flex items-center"
              >
                <Trash2 className="h-4 w-4 mr-2" />
                Delete
              </Button>
            )}
            <div className="flex space-x-2">
              <Button type="button" variant="outline" onClick={onClose} disabled={isLoading}>
                Cancel
              </Button>
              <Button type="submit" disabled={isLoading}>
                {isLoading ? 
                  <div className="flex items-center">
                    <div className="animate-spin rounded-full h-4 w-4 border-t-2 border-b-2 border-white mr-2"></div>
                    Saving...
                  </div> 
                : 'Save'}
              </Button>
            </div>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default EventModal;