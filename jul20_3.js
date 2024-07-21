let a=[]
while(true)
{
    choice=prompt("[1] add data \n [2] display data \n [3] edit data \n [4] delete data \n [5] exit \n enter yor choice")
    if (choice==1)
    {

        data=prompt("add data")
        a.push(data)
    }
    else if (choice==2)
    {
        str=``
        for(i in a)
        {
            str+=`[${+i+1}] ${a[i]} \n`
        }
        alert(str)
    }
    else if (choice==3)
    {
        index=prompt("enter data index")
        replace=prompt("enter the new data")
        a[index-1]=replace
    }
    else if (choice==4)
    {
        del=prompt("entaer the data you want to delete")
        a.splice(a.indexOf(del),1)
    }
    else if (choice==5)
    {
        break
    }
    else{
        alert("invalid input")
    }
}