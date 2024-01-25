using mars_api.Data.DTO.Events;

namespace mars_api.Services.EventService
{
    public interface IEventService
    {
        public EventDTO? GetEventById(Guid Id);
        public ICollection<EventDTO> GetAllEvents();
        public ICollection<EventDTO> GetAllEventsFromMonth(int year, int month);
        public ICollection<EventDTO> GetAllEventsFromYear(int year);
        public ICollection<EventDTO> GetAllEventsFromRange(DateOnly dateFrom, DateOnly dateTo);
        public EventDTO? CreateEvent(EventDTO eventDTO);
        public void UpdateEvent(EventDTO eventDTO);
    }
}
