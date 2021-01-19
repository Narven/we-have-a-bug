# Veratrak back-end technical challenge

This test is created for you to complete autonomously and to the best of your knowledge.

Please feel free to clone the provided repo for a quick start or alternatively create your own docker environment.

## You will need

 - Docker CE
 - Postman or similar for POST requests
 - "docker-compose up" to start the project

## Goal

To understand your experience regarding data management, coding and infrastructure knowledge please aim to complete all 3 tasks below.

This test can be completed under an hour but spend as much time as you need within a reasonable timeframe.

## Rules

This test is based on a real-life scenarios and tech-stack at Veratrak, please use NestJS and Typeorm to complete the tasks.

Try your best to use your experience, best practice and follow RESTful standards.

We have to be able to run your code and call the endpoints.

Upload your code to a public GIT repository.

Please explain your approach in a README file.

> Note: If for some reason you can't complete the tasks in a reasonable time please write pseudo code and explain what you would do and why.

## Tasks

### 1 - We have a bug!

Our QA analyst found something in the application and created the following bug ticket:

Issue: Users can be created with the same email address.

Steps to reproduce:

- Create user Test User with the email address test@example.com
- Create a new user Example User with the email address test@example.com

If a new user is being added to the platform with the same email address as another existing user an error message should display: "This email address already exists"

Please fix the issue!

### 2 - New feature ahead

In this sprint we have planned for a new API endpoint that is capable of listing, creating, and deleting companies.

The company should have an id, name, short description, and creation date.
One user can belong to many companies but only one company can belong to a user.

- Create a new Company entity
- Create a new Company controller
- The controller should be able to create a new company also assign users from the users table by ID
- The controller should be able to list all companies and related users
- The controller should be able to delete a company and remove the relations but not the users

> Note: Once the entity is created Typeorm will attempt to create the DB table so no need to create it manually

### 3 - The customer has a question

A customer needs a new feature and the product owner asks your opinion on approach, feasibility and complexity of the following:

"The customer is very happy that they can upload and download documents in our platform but they also have a need to apply an e-signature to the PDF files. They would like their username, email and the current date applied to the PDF document when they click the "Sign" button on the selected file's UI."

Try your best to explain explain your approch to a non-technical person in a README file, list all components you can think of from database, back-end and front-end point of view.

You may also list your questions for the customer if the feature needs clarifications.

> Note: If needed, you can make a few assumptions, e.g. authentication and file upload is already implemented, maximum PDF size is 500MB, etc.
