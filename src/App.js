import React from 'react'
import { useState, useEffect } from 'react'
import Quote from './components/Quote'
import QuoteInfo from './components/QuoteInfo'
import Random from './components/Random'
import AllQuotes from './components/AllQuotes'
import Footer from './components/Footer'
import './App.css'


const App = () => {
    const [author, setAuthor] = useState("")
    const [quote, setQuote] = useState("")
    const [genre, setGenre] = useState("")
    const [show, setShow] = useState(false)
    const [allQuotes, setAllQuotes] = useState([])

    const getAPI = () => {
        fetch("https://quote-garden.herokuapp.com/api/v3/quotes/random")
            .then((response) => response.json())
            .then((data) => {
                const dataQuote = data.data
                // console.log(dataQuote)
                const randomNum = Math.floor(Math.random() * dataQuote.length)
                const currentQuote = dataQuote[randomNum]
                setQuote(currentQuote.quoteText)
                setAuthor(currentQuote.quoteAuthor)
                setGenre(currentQuote.quoteGenre)
            })
    }

    useEffect(() => {
        getAPI()
    }, [])

    const getAllQuotes = () => {
        fetch(`https://quote-garden.herokuapp.com/api/v3/quotes/?author=${author}`)
            .then((response) => response.json())
            .then((data) => {
                setAllQuotes(data.data)

            })

    }

    const handleClick = () => {
        setShow(!show)
        getAllQuotes()
    }
    const handleRandom = () => {
        getAPI()

    }

    return (
        <div className='app'>
            {show ?
                <>
                    <AllQuotes show={show} setShow={setShow} author={author} allQuotes={allQuotes} quote={quote} /></>
                : <>  <Random handleRandom={handleRandom} />
                    <Quote quote={quote} />
                    <QuoteInfo author={author} genre={genre} show={show} setShow={setShow} handleClick={handleClick} />
                </>}
            <Footer />
        </div>
    )
}

export default App