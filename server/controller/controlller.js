class user{
    id
    name
    date 
    birthday
    gender 
    age 
    createdAt
    createdBy
    updatedAt
    updatedBy

    constructor(name, date, birthday, age, gender) {
        this.id = getAutoId();
        this.name = name;
        this.date = date;
        this.birthday = birthday;
        this.age = age;
        this.gender = gender;
        this.createdAt = Date.now();
        this.createdBy = name;

    }
};

export default user;