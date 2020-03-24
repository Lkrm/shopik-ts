import React from 'react';

import { Checkbox, Search, Input } from '../../../../components';
import './style.sass';
import {identity} from "ramda";

type ProductsFilterProps = {
    className?: string | '',
}

const ProductsFilter = ({ className } : ProductsFilterProps) => (
    <div className={`filter ${className}`}>
        <div className="filter__group">
            <div className="filter__group-header">
                <b className="filter__title">Пошук товару</b>
            </div>
            <div className="filter__group-body">
                <Search value="" handleChange={() => {}}/>
            </div>
        </div>
        <div className="filter__group">
            <div className="filter__group-header">
                <b className="filter__title">Ціна</b>
            </div>
            <div className="row filter__group-body">
                <Input className="col-lg-6 filter__price-input" label="Від:" type="number" name="from" handleChange={identity} />
                <Input className="col-lg-6 filter__price-input" label="До:" type="number" name="to" handleChange={identity} />
            </div>
        </div>
        <div className="filter__group">
            <div className="filter__group-header">
                <b className="filter__title">Виробник</b>
            </div>
            <div className="filter__group-body">
                <ul className="filter__group-list checkbox-list">
                    {
                        [1,1,1,,1,1,,1,1,1,1].map(() => (
                            <li className="checkbox-list__item">
                                <Checkbox
                                    name="check"
                                    id="check"
                                    handleChange={() => {}} />
                                <span className="checkbox-list__item-text">Samsung corporate   </span>
                            </li>))
                    }
                </ul>
            </div>
        </div>
        <div className="filter__group">
            <div className="filter__group-header">
                <b className="filter__title">Марка моделі</b>
            </div>
            <div className="filter__group-body">
                <ul className="filter__group-list checkbox-list">
                    {
                        [1,1,1,,1,1,,1,1,1,1].map(() => (
                            <li className="checkbox-list__item">
                                <Checkbox
                                    name="check"
                                    id="check"
                                    handleChange={() => {}} />
                                <span className="checkbox-list__item-text">Samsung corporate   </span>
                            </li>))
                    }
                </ul>
            </div>
        </div>
        <div className="filter__group">
            <div className="filter__group-header">
                <b className="filter__title">Акомулятор</b>
            </div>
            <div className="filter__group-body">
                <ul className="filter__group-list checkbox-list">
                    {
                        [1,1,1,,1,1,,1,1,1,1].map(() => (
                            <li className="checkbox-list__item">
                                <Checkbox
                                    name="check"
                                    id="check"
                                    handleChange={() => {}} />
                                <span className="checkbox-list__item-text">300 mAh</span>
                            </li>))
                    }
                </ul>
            </div>
        </div>
    </div>
);

export default ProductsFilter;
