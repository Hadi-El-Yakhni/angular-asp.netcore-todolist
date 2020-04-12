namespace server.Models
{
  public class Task
  {

    public Task()
    {
      // i make it so dotnet can convert received json to Task class!!
    }

    public Task(string uid, string title, string description, bool isDone)
    {
      this.UID = uid;
      this.Title = title;
      this.Description = description;
      this.IsDone = isDone;
    }

    public string UID { get; set; }
    public string Title { get; set; }
    public string Description { get; set; }
    public bool IsDone { get; set; }
  }
}