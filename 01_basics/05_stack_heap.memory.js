//Stack is used in all Primnitive types
//Heap memory is used in all Non Primitive types
let myYoutube="Dev" //goes into stack memory
let anotherName=myYoutube
anotherName="Puney"
let userOne={
    email:"devadlakha38@gmail.com",
    upi:"dev@abc"
}
let userTwo=userOne //userTwo ko userName ka proper reference hi milega 
// as it is in heap memory
//so isme kuch bhi change karo userOne mai bhi vo change hojaega
