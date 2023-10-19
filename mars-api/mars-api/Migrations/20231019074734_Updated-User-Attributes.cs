using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace mars_api.Migrations
{
    /// <inheritdoc />
    public partial class UpdatedUserAttributes : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "Title",
                table: "Users",
                newName: "Suffix");

            migrationBuilder.RenameColumn(
                name: "Email",
                table: "Users",
                newName: "Salutation");

            migrationBuilder.AddColumn<string>(
                name: "Prefix",
                table: "Users",
                type: "TEXT",
                nullable: true);

            migrationBuilder.CreateTable(
                name: "EMail",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "TEXT", nullable: false),
                    UserId = table.Column<Guid>(type: "TEXT", nullable: false),
                    Email = table.Column<string>(type: "TEXT", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_EMail", x => x.Id);
                    table.ForeignKey(
                        name: "FK_EMail_Users_UserId",
                        column: x => x.UserId,
                        principalTable: "Users",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_EMail_UserId",
                table: "EMail",
                column: "UserId");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "EMail");

            migrationBuilder.DropColumn(
                name: "Prefix",
                table: "Users");

            migrationBuilder.RenameColumn(
                name: "Suffix",
                table: "Users",
                newName: "Title");

            migrationBuilder.RenameColumn(
                name: "Salutation",
                table: "Users",
                newName: "Email");
        }
    }
}
