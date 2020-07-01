const functions = require('firebase-functions');
const admin =require('firebase-admin')
admin.initializeApp(functions.config().firebase)

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
 exports.helloWorld = functions.https.onRequest((request, response) => {
  response.send("Hello from ninjas!");
 });

 const createNotification= (notification) =>{
     return admin.firestore().collection('notifications')
     .add(notification)
     .then(doc => console.log('notification added', doc))
 }

 exports.projectCreated =functions.firestore
    .document('projects/{projectId}')
    .onCreate(doc =>{

        const project =doc.data()
        const notifications ={
            content:'Added a new project',
            user :`${project.authorFirstName} ${project.authorLastName}`,
            time:admin.firestore.FieldValue.serverTimestamp()
        }

        return createNotification(notifications)
    })

    exports.userJoined1 =functions.firestore
    .document('users/{uid}')
    .onCreate(user =>{
        

            const newUser =user.data()
            const notification ={
                content:'Joined the application',
                user: `${newUser.firstName} ${newUser.lastName}`,
                time:  admin.firestore.FieldValue.serverTimestamp()
            }

            return createNotification(notification)
        })
   