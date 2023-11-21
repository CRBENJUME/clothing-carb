import { Routes, Route } from 'react-router-dom';
import "./styles.css"
import CategoriesPreview from '../categories-preview/previewC';
import Category from '../category/categoryCom';

export default function Shop () {

    return (
        <Routes>
            <Route index element={<CategoriesPreview/>} />
            <Route path=':category' element={<Category/>} />
        </Routes>
    )
}