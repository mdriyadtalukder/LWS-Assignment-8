import React, { useState } from 'react';
import { useAddBookMutation } from '../../redux/features/books/bookSlice';

const Add = () => {
    const [name, setName] = useState("");
    const [author, setAuthor] = useState("");
    const [thumbnail, setImg] = useState("");
    const [price, setPrice] = useState("");
    const [rating, setRating] = useState("");
    const [featured, setFeatured] = useState(false);
    const [addBook, { isError, isLoading, isSuccess }] = useAddBookMutation();
    const adding = (e) => {
        e.preventDefault();
        addBook({ name, author, thumbnail, price, rating, featured });
        e.target.reset();
    }
    return (
        <main class="py-6 2xl:px-6">
            <div class="container">
                <div class="p-8 overflow-hidden bg-white shadow-cardShadow rounded-md max-w-xl mx-auto">
                    <h4 class="mb-8 text-xl font-bold text-center">Add New Book</h4>
                    <form class="book-form" onSubmit={adding}>
                        <div class="space-y-2">
                            <label for="lws-bookName">Book Name</label>
                            <input required onChange={(e) => setName(e.target.value)} class="text-input" type="text" id="lws-bookName" name="name" />
                        </div>

                        <div class="space-y-2">
                            <label for="lws-author">Author</label>
                            <input onChange={(e) => setAuthor(e.target.value)} required class="text-input" type="text" id="lws-author" name="author" />
                        </div>

                        <div class="space-y-2">
                            <label for="lws-thumbnail">Image Url</label>
                            <input onChange={(e) => setImg(e.target.value)} required class="text-input" type="text" id="lws-thumbnail" name="thumbnail" />
                        </div>

                        <div class="grid grid-cols-2 gap-8 pb-4">
                            <div class="space-y-2">
                                <label for="lws-price">Price</label>
                                <input onChange={(e) => setPrice(e.target.value)} required class="text-input" type="number" id="lws-price" name="price" />
                            </div>

                            <div class="space-y-2">
                                <label for="lws-rating">Rating</label>
                                <input onChange={(e) => setRating(e.target.value)} required class="text-input" type="number" id="lws-rating" name="rating" min="1"
                                    max="5" />
                            </div>
                        </div>

                        <div class="flex items-center">
                            <input onClick={() => setFeatured(!featured)} id="lws-featured" type="checkbox" name="featured" class="w-4 h-4" />
                            <label for="lws-featured" class="ml-2 text-sm"> This is a featured book </label>
                        </div>

                        <button type="submit" class="submit" id="lws-submit">Add Book</button>
                    </form>
                </div>
                {isError && <div>There was an error</div>}
                {isLoading && <div>Loading...</div>}
                {isSuccess && <div>Added successfully!!!</div>}
            </div>
        </main>
    );
};

export default Add;