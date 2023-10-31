export function getRelativeTime(dateString) {
    const date = new Date(dateString); 
    const now = new Date(); 
    
    var elapsed = now - date; 
    
    const minute = 60*1000 ;
    const hour = 60 * minute;
    const day = 24 * hour;
    const month = 30 * day;
    const year = 365 * day;
 
    let relativeTime;
    if (elapsed < minute) 
      relativeTime =  Math.round(elapsed/1000) + ' second';
    else if (elapsed < hour) 
      relativeTime = Math.round(elapsed / minute) + ' minute';
    else if (elapsed < day) 
      relativeTime = Math.round(elapsed / hour) + ' hour';
    else if (elapsed < month) 
      relativeTime = Math.round(elapsed / day) + ' day';
    else if (elapsed < year) 
      relativeTime = Math.round(elapsed / month) + ' month';
    else 
      return new Date(dateString)
      .toLocaleDateString(undefined, {year:'numeric',month:'long',day:'numeric'}); 

    return relativeTime + (relativeTime.startsWith('1 ') ? ' ago' : 's ago') 
}
