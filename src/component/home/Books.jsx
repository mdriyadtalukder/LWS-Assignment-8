import React from 'react';
import Book from './Book';
import { useDispatch, useSelector } from 'react-redux';
import { filterss } from '../../redux/features/filter/filterSlice';
import { useGetBooksQuery } from '../../redux/features/books/bookSlice';

const Books = () => {
    const dispatch = useDispatch();
    const value = useSelector((state) => state.filter.filters);
    const value1 = useSelector((state) => state.filter.search);
    const { data: books, isError, isLoading } = useGetBooksQuery()
    let content = null;
    if (isLoading) {
        content = <div>Loading...</div>
    }
    if (!isLoading && isError) {
        content = <div>There was an error!</div>
    }
    if (!isError && !isLoading && books?.length === 0) {
        content = <div>No video found!</div>
    }
    if (!isError && !isLoading && books.length > 0) {
        content = books
            .filter(book => {
                if (value === "Featured") {
                    return book?.featured
                }
                else {
                    return true;
                }
            })
            .filter(book => {
                if (value1) {
                    return book?.name.toLowerCase().includes(value1.toLowerCase())
                }
                else {
                    return true;
                }
            })
            .map(book => <Book key={book?.id} book={book}></Book>)
    }
    return (
        <main class="py-12 px-6 2xl:px-6 container">
            <div class="order-2 xl:-order-1">
                <div class="flex items-center justify-between mb-12">
                    <h4 class="mt-2 text-xl font-bold">Book List</h4>

                    <div class="flex items-center space-x-4">
                        <button onClick={() => dispatch(filterss("All"))} class={`lws-filter-btn  ${value === 'All' && "active-filter"}`}>All</button>
                        <button onClick={() => dispatch(filterss("Featured"))} class={`lws-filter-btn  ${value === 'Featured' && "active-filter"}`}>Featured</button>
                    </div>
                </div>
                <div class="space-y-6 md:space-y-0 md:grid grid-cols-1 lg:grid-cols-3 gap-6">

                    {content}


                </div>
            </div>
        </main>
    );
};

export default Books;