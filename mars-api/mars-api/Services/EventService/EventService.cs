using mars_api.Context;
using mars_api.Data.DTO.Events;
using mars_api.Data.Models.Events;
using Microsoft.VisualBasic;
using System.Runtime.InteropServices;

namespace mars_api.Services.EventService
{
    public class EventService : IEventService
    {
        private readonly MarsContext context;

        public EventService(MarsContext context)
        {
            this.context = context;
        }

        public EventDTO? CreateEvent(EventDTO eventDTO)
        {
            eventDTO.Id = new Guid();
            context.Events.Add(eventDTO.AsModel());
            context.SaveChanges();
            return eventDTO;
        }

        public ICollection<EventDTO> GetAllEvents()
        {
            return context.Events
                .Select(e => e.AsDTO())
                .ToList();
        }

        public ICollection<EventDTO> GetAllEventsFromMonth(int year, int month)
        {
            return context.Events
                .Where(e => e.Date.Year == year)
                .Where(e => e.Date.Month == month)
                .Select(e => e.AsDTO())
                .ToList();
        }

        public ICollection<EventDTO> GetAllEventsFromRange(DateOnly dateFrom, DateOnly dateTo)
        {
            return context.Events
                // All Events after (including) dateFrom
                .Where(e => 
                    (e.Date.Year == dateFrom.Year && e.Date.Month == dateFrom.Month && e.Date.Day >= dateFrom.Day) ||
                    (e.Date.Year == dateFrom.Year && e.Date.Month > dateFrom.Month) ||
                    (e.Date.Year > dateFrom.Year)
                )
                // All Events befor (including) dateTo
                .Where(e => 
                    (e.Date.Year == dateFrom.Year && e.Date.Month == dateFrom.Month && e.Date.Day <= dateFrom.Day) ||
                    (e.Date.Year == dateFrom.Year && e.Date.Month < dateFrom.Month) ||
                    (e.Date.Year < dateTo.Year)
                )
                .Select(e => e.AsDTO())
                .ToList();
        }

        public ICollection<EventDTO> GetAllEventsFromYear(int year)
        {
            return context.Events
                .Where(e => e.Date.Year == year)
                .Select(e => e.AsDTO())
                .ToList();
        }

        public EventDTO? GetEventById(Guid Id)
        {
            return context.Events
                .Where(e => e.Id.Equals(Id))
                .Select(e => e.AsDTO())
                .FirstOrDefault();
        }

        public void UpdateEvent(EventDTO eventDTO)
        {
            context.Update(eventDTO.AsModel());
            context.SaveChanges();
        }
    }
}
