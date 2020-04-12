using System;
using System.IO;
using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using server.Models;

namespace server.Controllers
{

  [ApiController]
  [Route("[controller]")]
  public class TasksController : ControllerBase
  {

    private IConfiguration config;

    public TasksController(IConfiguration config)
    {
      this.config = config;
    }

    [HttpPost]
    public void AddTask(Task task)
    {
      Guid guid = Guid.NewGuid();
      using (System.IO.StreamWriter file = new System.IO.StreamWriter(config.GetSection("DataPath").Value, true))
      {
        if (task.Description == "")
          task.Description = " ";
        file.WriteLine(guid + ":::::" + task.Title + ":::::" + task.Description + ":::::" + task.IsDone);
      }
    }

    [HttpGet]
    public List<Task> GetTasks()
    {
      List<Task> tasks = new List<Task>();
      var lines = System.IO.File.ReadLines(config.GetSection("DataPath").Value);
      foreach (var line in lines)
      {
        string[] data = line.Split(":::::");
        tasks.Add(new Task(data[0], data[1], data[2], bool.Parse(data[3])));
      }
      tasks.Reverse();
      return tasks;
    }

    [HttpPatch]
    public void UpdateTask(Task task)
    {
      int lineIndex = 0;
      string dataPath = config.GetSection("DataPath").Value;
      string[] lines = System.IO.File.ReadAllLines(dataPath);
      foreach (string line in lines)
      {
        string[] data = line.Split(":::::");
        if (data[0] == task.UID)
        {
          if (task.Description == "")
            task.Description = " ";
          lines[lineIndex] = task.UID + ":::::" + task.Title + ":::::" + task.Description + ":::::" + task.IsDone;
          break;
        }
        lineIndex++;
      }
      System.IO.File.WriteAllLines(dataPath, lines);
    }

    [HttpDelete]
    public void DeleteTask([FromQuery(Name = "uid")] string uid)
    {

      string dataPath = config.GetSection("DataPath").Value;
      string[] lines = System.IO.File.ReadAllLines(dataPath);
      using (System.IO.StreamWriter writer = new System.IO.StreamWriter(dataPath))
      {
        foreach (string line in lines)
        {
          String[] data = line.Split(":::::");
          if (data[0] != uid)
          {
            writer.WriteLine(line);
          }
        }
      }
    }
  }
}