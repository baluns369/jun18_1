x=prompt("enter the time range")
function route(a)
{
    if(a=="5-8"||a=="11-3"||a=="9-5")
        {
            return "The best route is highway"
        }
        else if(a=="8-11"||a=="3-9")
        {
            return "The best route is pipeline"
        }
        else
        {
            return"wrong time"
        }
}
alert(route(x))