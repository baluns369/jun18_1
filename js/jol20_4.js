let a=[]
while(true)
{
    choice=prompt("[1] add student detils \n [2] display \n [3] edit \n [4] delete \n [5] exit ")
    if(choice==1)
    {
        std_name=prompt("enter student name")
        std_age=prompt("enter the student age")
        // obj={name:std_name,age:std_age}
        a.push({name:std_name,age:std_age})
    }
    else if(choice==2)
    {
        str=``
        for (i in a)
        {

            str+=`[${+i+1}] ${a[i].name} ${a[i].age} \n`
        }
        alert(str)

    }
    else if(choice==3)
    {
        index=prompt("enter the index of data to edit")
        new_age=prompt("enter the age")
        // replace=prompt("enter new name")
        replace=prompt("enter the new age")
        
        a[index-1].age=new_age
    }
    else if(choice==4)
    {
        del=prompt("enter data you want to delete")
        a.splice(a.indexOf(a.del))
    }
    else if(choice==5)
    {
        break
    }
    else{
        alert("inavlid input")
    }
}
