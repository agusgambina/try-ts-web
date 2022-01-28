import { User } from './models/user';

const user = new User({ id: 1, name: 'newer name', age: 5 });

user.on('save', () => {
  console.log(user);
})

user.save();