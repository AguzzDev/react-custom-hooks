import { useEffect, useRef, useState } from 'react'

export const useFetch = (url) => {

    const montado = useRef(true)
    const [state, setState] = useState({ data: null, loading: true, error: null })

    useEffect(() => {
        return () => {
            montado.current = false
        }
    }, [])

    useEffect(() => {

        setState({ data: null, loading: true, error: null })

        fetch(url)
            .then(resp => resp.json())
            .then(data => {
                if (montado.current) {
                    setState({
                        loading: false,
                        error: null,
                        data
                    })
                } else {
                    console.log('setState no se llamo')
                }

            })

    }, [url])

    return state;

}
