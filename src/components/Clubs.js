import useFetch from "../hooks/useFetch";
import React from "react";
import Club from "./Club/BMUclub";
import AllExp from "./AllExp";



const Clubs = () => {

    const {
        showClub,
        shows,
        urlGenerate,
        addExpenseHandler,
        deleteHandler,
        expenses,
        clubNameHandler,
        selectedClub,
        showScrollButton,
        handleScrollToTop
    } = useFetch();
    return (<React.Fragment>

        {showClub && <Club url={urlGenerate} club={clubNameHandler}/>}

        {!showClub && <AllExp onAdd={addExpenseHandler} items={expenses} onDelete={deleteHandler} view={shows}
                              selectedClub={selectedClub}/>}
        {showScrollButton && (<button className={"scrollTop"} onClick={handleScrollToTop}><i
            className="bi bi-arrow-up"></i></button>)}
    </React.Fragment>);
}
export default Clubs;
