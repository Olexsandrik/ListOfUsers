export const getPagesCount = (totalCount,limit) =>{
        return Math.ceil(totalCount/limit) // ceil округляє значення в більшу сторну 
}
