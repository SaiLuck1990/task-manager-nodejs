## This is a task manager app created with Node js

## List of APIs 

1. POST - http://localhost:3000/users

2. GET - http://localhost:3000/users

3. GET - http://localhost:3000/users/5fe22006278984077a890416

4. PATCH - http://localhost:3000/users/5fe21f757ddda60755276010

5. DELETE - http://localhost:3000/users/5fe22006278984077a890416

6. POST - http://localhost:3000/tasks

7. GET - http://localhost:3000/tasks

8. GET - http://localhost:3000/tasks/5fe22006278984077a890416

9. PATCH - http://localhost:3000/tasks/5fe21f757ddda60755276010

10. DELETE - http://localhost:3000/tasks/5fe22006278984077a890416



## Check if port for Mongo DB is running 
netstat -vanp tcp | grep 27017

## Install Mongo DB in Mac

brew tap mongodb/brew
brew install mongodb-community
brew services start mongodb-community 

## Start Mongo DB
sudo mongod --dbpath /Users/sai/Desktop/mongodb_data

## Run below command in Robo T to make index unique 

db.users.createIndex({email: 1}, {unique: true})


