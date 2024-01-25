using mars_api.Data.DTO.Events;

namespace mars_api.Data.Models.Events
{
    public static class AsDTOExtension
    {
        public static EventDTO AsDTO(this Event e)
        {
            return new EventDTO
            {
                Id = e.Id,
                Name = e.Name,
                Description = e.Description,
                Date = e.Date,
            };
        }
    }
}