# angular-aspdotnetcore-todolist
Basic CRUD Todo list built with angular for the frontend and Asp .net core for the backend. 

to run the application on your computer:

1- client side:
    change to client folder: "cd client"
    run "npm install" 
    make sure to have angular cli installed 
    run "ng serve -o"
  
2- server side:
    change to client folder: "cd server"
    make sure you have .net core sdk version 3.x
    run "dotnet watch run"
    
    by default, the data are stored in a txt file in /server/DataBase/data.txt, 
    you can change the path of the txt file by changing "DataPath" value in /server/appsettings.json
