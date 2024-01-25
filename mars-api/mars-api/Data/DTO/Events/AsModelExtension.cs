using mars_api.Data.DTO.Events;
using mars_api.Data.Models.Events;

namespace mars_api.Data.DTO.Events
{
    public static class AsModelExtension
    {
        public static Event AsModel(this EventDTO eventDTO)
        {
            return new Event
            {
                Id = eventDTO.Id,
                Name = eventDTO.Name,
                Description = eventDTO.Description,
                Date = eventDTO.Date,
            };
        }
    }
}
