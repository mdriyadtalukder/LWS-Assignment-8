import React, { useRef, useState } from 'react';
import { useEditBookMutation, useGetBookQuery } from '../../redux/features/books/bookSlice';
import { useParams } from 'react-router-dom';

const Edit = () => {
    const { id } = useParams();
    const { data: book } = useGetBookQuery(id);
    const [editBook, { isError, isLoading, isSuccess }] = useEditBookMutation();
    const name = useRef('');
    const author = useRef('');
    const thumbnail = useRef('');
    const price = useRef('');
    const rating = useRef('');
    const [status, setStatus] = useState(false);
    const [status1, setStatus1] = useState(true);

    const editing = (e) => {
        e.preventDefault();

        if (book?.featured) {
            editBook({
                id,
                data: {
                    name: name.current.value,
                    author: author.current.value,
                    thumbnail: thumbnail.current.value,
                    price: Number(price.current.value),
                    rating: Number(rating.current.value),
                    featured: status1
                }
            })
        }
        else {
            editBook({
                id,
                data: {
                    name: name.current.value,
                    author: author.current.value,
                    thumbnail: thumbnail.current.value,
                    price: Number(price.current.value),
                    rating: Number(rating.current.value),
                    featured: status
                }
            })
        }


    }

    return (
        <main class="py-6 2xl:px-6">
            <div class="container">
                <div class="p-8 overflow-hidden bg-white shadow-cardShadow rounded-md max-w-xl mx-auto">
                    <h4 class="mb-8 text-xl font-bold text-center">Edit Book</h4>
                    <form class="book-form" onSubmit={editing}>
                        <div class="space-y-2">
                            <label for="lws-bookName">Book Name</label>
                            <input defaultValue={book?.name} ref={name} required class="text-input" type="text" id="lws-bookName" name="name" />
                        </div>

                        <div class="space-y-2">
                            <label for="lws-author">Author</label>
                            <input defaultValue={book?.author} ref={author} required class="text-input" type="text" id="lws-author" name="author" />
                        </div>

                        <div class="space-y-2">
                            <label for="lws-thumbnail">Image Url</label>
                            <input defaultValue={book?.thumbnail} ref={thumbnail} required class="text-input" type="text" id="lws-thumbnail" name="thumbnail" />
                        </div>

                        <div class="grid grid-cols-2 gap-8 pb-4">
                            <div class="space-y-2">
                                <label for="lws-price">Price</label>
                                <input defaultValue={book?.price} ref={price} required class="text-input" type="number" id="lws-price" name="price" />
                            </div>

                            <div class="space-y-2">
                                <label for="lws-rating">Rating</label>
                                <input defaultValue={book?.rating} ref={rating} required class="text-input" type="number" id="lws-rating" name="rating" min="1"
                                    max="5" />
                            </div>
                        </div>

                        <div class="flex items-center">
                            <input onClick={() => book?.featured ? setStatus1(!status1) : setStatus(!status)} defaultChecked={book?.featured} id="lws-featured" type="checkbox" name="featured" class="w-4 h-4" />
                            <label for="lws-featured" class="ml-2 text-sm"> This is a featured book </label>
                        </div>

                        <button type="submit" class="submit" id="lws-submit">Edit Book</button>
                        {isError && <div>There was an error</div>}
                        {isLoading && <div>Loading...</div>}
                        {isSuccess && <div>Added successfully!!!</div>}
                    </form>
                </div>
            </div>
        </main>
    );
};

export default Edit;