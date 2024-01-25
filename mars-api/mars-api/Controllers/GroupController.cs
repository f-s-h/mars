﻿using mars_api.Data.DTO.Groups;
using mars_api.Data.DTO.Users;
using mars_api.Services.GroupService;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace mars_api.Controllers
{
    [Route("api/[controller]/[action]")]
    [ApiController]
    public class GroupController : ControllerBase
    {
        private IGroupService groupService;
        public GroupController(IGroupService groupService) {
            this.groupService = groupService;
        }
        [HttpGet]
        public ActionResult<IEnumerable<GroupDTO>> GetAllGroups()
        {
            return Ok(groupService.GetAllGroups());
        }

        [HttpGet]
        public ActionResult<IEnumerable<GroupDTO>> GetAllGroupsDetail()
        {
            return Ok(groupService.GetAllGroupsDetail());
        }

        [HttpGet("{groupId}")]
        public ActionResult<GroupDTO> GetGroupById([FromRoute] Guid groupId) { 
            GroupDTO? group = groupService.GetGroupById(groupId);
            if(group == null)
            {
                return NotFound();
            }
            return Ok(group);
        }

        [HttpPost]
        public ActionResult<GroupDTO> CreateGroup([FromBody] GroupDTO groupDTO)
        {
            GroupDTO? group = groupService.CreateGroup(groupDTO);
            if(group == null)
            {
                return BadRequest();
            }
            return Ok(group);
        }

        [HttpPut("{groupId}/{userId}")]
        public ActionResult AssignUserToGroup([FromRoute] Guid GroupId, [FromRoute] Guid userId)
        {
            groupService.AssignUserToGroup(GroupId, userId);
            return Ok();
        }

        [HttpPut]
        public ActionResult AssignUserToGroup([FromBody] GroupDTO groupDTO)
        {
            groupService.UpdateGroup(groupDTO);
            return Ok();
        }
    }
}
