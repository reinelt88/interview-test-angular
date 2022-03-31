# Rezare Systems / Map of Agriculture Interview Test

This repository is effectively a template for our interview test.

This template contains the following:
- .Net 5.0 Web API
- Angular web application

Each of the above is stubbed out and provides some basic functionality.  
The currently implemented features are as follows:
- List of students on the home page
- API endpoint to return the full list of students

We ask that you spend two hours to do this test and start by taking a Fork of this repository.  

## Your Details
Please enter/replace your details below.
|   |   |
| - | - |
| Name | Reinel Torres |
| Date | 2022-03-30 |
| Start Time | 17:39:59 -06:00 |
| Finish Time | 17:36:00 -06:00 |

## Requirements
In order to complete this test you will need the following tools:
- Either Visual Studio or Visual Studio Code
- Command line for running `ng serve` and/or `dotnet run` etc

You should be able to complete this test on your choice of machine, and some technologies that we use have been deliberately left out to make this accessible as possible.
The code in this repository will compile and run on Windows, macOS and Linux.



## Instructions
> As you complete each item in the list below, please ensure that you mark it off by changing the `[]` to a `[x]`.  
> Please ensure that you record your start and finish time (in local time, using ISO timestamps at the bottom of this README).
> 
- [ x ] Add to the student their average grade and flow it through from the API to the frontend
- [ x ] Add a page to the frontend to allow students to be added
- [ x ] Add an endpoint to the API to allow students to be added
- [ x ] Implement the `Add` method of the `IStudentService`
- [ x ] Style the display of the average grade so that it has three colorations:
  - Green: average grade greater than 80%
  - Orange: average grade less than 80% and greater than 50%
  - Red: average grade less than 50%

Extras for if you have time:
- [ x ] Implement the `Delete` method of `IStudentService`
- [ x ] Add delete endpoint to the API
- [ x ] Add delete functionality to the frontend

## Extra considerations
The API was implemented using python with the Django framework and SQLite to ensure portability and fast revision of the project.

### Start up the Django server.
1. From the base directory of the project go to the **pythonAPI** folder `cd pythonAPI/`
2. Run `python3 manage.py runserver`. Now the API run on `http://127.0.0.1:8000/`

### Extra resources.
 - It is possible to access an administration through the route http://127.0.0.1:8000/admin/ with the user:
*reinelt* and password: *RezareSystems2022!#* In this administration, all the necessary operations can be carried out on the data.
 - In the same way, you can consult the main route of the API (http://127.0.0.1:8000) to see information on how to use the API.

