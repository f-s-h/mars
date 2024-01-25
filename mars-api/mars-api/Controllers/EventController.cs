using mars_api.Data.DTO.Events;
using mars_api.Data.DTO.Groups;
using mars_api.Services.EventService;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace mars_api.Controllers
{
    [AllowAnonymous]
    [Route("api/[controller]/[action]")]
    [ApiController]
    public class EventController: ControllerBase
    {
        private readonly IEventService eventService;
        public EventController(IEventService eventService)
        {
            this.eventService = eventService;
        }

        [HttpGet]
        public ActionResult<IEnumerable<EventDTO>> GetAllEvents()
        {
            return Ok(eventService.GetAllEvents());
        }

        [HttpGet("{eventId}")]
        public ActionResult<GroupDTO> GetEventById([FromRoute] Guid eventId)
        {
            EventDTO? eventDTO = eventService.GetEventById(eventId);
            if (eventDTO == null)
            {
                return NotFound();
            }
            return Ok(eventId);
        }

        [HttpGet("{year}/{month}")]
        public ActionResult<IEnumerable<EventDTO>> GetAllEventsFromMonth([FromRoute] int year, [FromRoute] int month) 
        {
            var events = eventService.GetAllEventsFromMonth(year, month);
            return Ok(events);
        }

        [HttpGet("{year}")]
        public ActionResult<IEnumerable<EventDTO>> GetAllEventsFromYear([FromRoute] int year)
        {
            var events = GetAllEventsFromYear(year);
            return Ok(events);
        }

        [HttpGet()]
        public ActionResult<IEnumerable<EventDTO>> GetAllEventsFromRange([FromBody] DateOnly from, [FromBody] DateOnly to)
        {
            var events = GetAllEventsFromRange(from, to);
            return Ok(events);
        }

        [HttpPost]
        public ActionResult<EventDTO> CreateEvent([FromBody] EventDTO eventDTO)
        {
            EventDTO? savedEvent = eventService.CreateEvent(eventDTO);
            if (savedEvent == null)
            {
                return BadRequest();
            }
            return Ok(savedEvent);
        }
    }
}
