({
  name: "",
  url: "https://dotnet.microsoft.com/learn/dotnet/hello-world-tutorial/intro",
  desc:
    "command line driven projects; any IDE would be built on this platform.",
  notes: [""],
  sections: [
    {
      name: "intro",
      lessonDuration: "10 minutes",
      purpose: "install .NET and create your first application.",
      scenario:
        "a simple app written in C# that prints 'hello, world!' to the console"
    },
    {
      name: "download and install",
      aspects: [
        {
          name: "check that the download works",
          desc:
            "use cmd command 'dotnet', soliciting response from the terminal."
        }
      ]
    },
    {
      name: "create your app",
      desc: "build new application of a certain template.",
      aspects: [
        {
          name: "command",
          value: "dotnet new console -o ConsoleApp",
          desc:
            "{command keyword} <TEMPLATE> {output directory param} {output directory literal} "
        },
        {
          name: "Program.cs",
          desc: "Main method; application entry point."
        }
      ]
    },
    {
      name: "Run your app",
      desc: "dotnet run",
      aspects: [
        {
          name: "dotnet run",
          desc: "runs the 'Main' method in the directory"
        },
        {
          name: "add code",
          value: 'Console.WriteLine("The current time is: " + DateTime.Now);'
        }
      ]
    }
  ]
});
