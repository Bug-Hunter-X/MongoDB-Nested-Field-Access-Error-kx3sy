```javascript
const query = { 'profile.name': { $regex: /John/, $options: 'i' } }; // Correct query for nested field

const cursor = db.collection('users').find(query);

cursor.forEach((user) => {
  if (user.profile && user.profile.name) {
    console.log(user.profile.name); // Safe access to nested field
  } else {
    console.log('Profile or name field not found.'); //Handle Missing Field gracefully
  }
});
```