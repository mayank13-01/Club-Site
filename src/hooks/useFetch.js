import {useEffect, useState, useCallback} from "react";
import axios from "axios";

const useFetch = () => {
    const [link, setLink] = useState('https://majorproject-2f5f2-default-rtdb.asia-southeast1.firebasedatabase.app/tasks.json');
    const [showClub, setShowClub] = useState(true);
    const [selectedClub, setSelectedClub] = useState('Acm');
    const [expenses, setExpenses] = useState([]);
    const [scrollPosition, setScrollPosition] = useState(0);
    const handleScrollToTop = () => {
        window.scrollTo({top: 0, behavior: 'smooth'});
    };

    const showScrollButton = scrollPosition > 100;
    const shows = () => {
        setShowClub(prevState => !prevState)
    }
    const urlGenerate = useCallback((link) => {
        setLink(link)
        setShowClub(prevState => !prevState)
    }, [])

    const clubNameHandler = (club) => {
        setSelectedClub(club)
    }

    const addExpenseHandler = useCallback(async (expense) => {
        await axios.post(link, expense)
        setExpenses((prevExpenses) => {
            return [expense, ...prevExpenses];
        });
    }, [link]);
    const deleteHandler = useCallback(async (id) => {
        let url
        url = link
        const dynamicUrl = url.slice(0, url.indexOf(".json")) + `/${id}.json`;
        await axios.delete(dynamicUrl)
        setExpenses((prevExpenses) => {
            return prevExpenses.filter((expense) => expense.id !== id);
        });
    }, [link])

    useEffect(() => {
        const fetchData = async () => {
            const res = await axios.get(link);
            const data = res.data;
            const expenses = []
            for (const key in data) {
                expenses.push({
                    id: key,
                    title: data[key].title,
                    amount: data[key].amount,
                    date: data[key].date,
                    details: data[key].details,
                });
            }

            expenses.sort((a, b) => new Date(a.date).getMonth() - new Date(b.date).getMonth());
            setExpenses(expenses)
        }
        fetchData()
    }, [addExpenseHandler, deleteHandler, urlGenerate, link])

    useEffect(() => {
        const handleScroll = () => {
            setScrollPosition(window.scrollY);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [scrollPosition]);

    return {
        expenses,
        addExpenseHandler,
        deleteHandler,
        showClub,
        shows,
        urlGenerate,
        clubNameHandler,
        selectedClub,
        showScrollButton,
        handleScrollToTop
    };

}

export default useFetch;