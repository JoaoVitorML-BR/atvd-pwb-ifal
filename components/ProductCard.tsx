import { ProductCardProps } from '@/interface/productCardInterface';
import React from 'react';

const ProductCard: React.FC<ProductCardProps> = ({ name, description, price, image }) => {
    return (
        <>
            <div className="flex bg-white shadow-md rounded-lg p-6 mb-6 items-start gap-6 bg-itens">
                <img
                    className="w-[200px] h-[200px] object-cover rounded"
                    src={image}
                    alt={name}
                />

                <div className="flex flex-col flex-1">
                    <div className="flex justify-between items-center mb-2 pt-[10px] mx-[10px]">
                        <div className="text-lg font-semibold">
                            <span className="text-style">Modelo: </span>
                            <span className="text-style-2">{name}</span>
                        </div>
                        <div className="text-lg font-semibold">
                            <span className="text-style">Preço: </span>
                            <span className="text-style-2">R$ {price.toFixed(2)}</span>
                        </div>
                    </div>

                    <div className="flex items-baseline mx-[10px]">
                        <span className="text-style">Descrição:  </span>
                        <span className="text-style-2">{description}</span>
                    </div>
                </div>
            </div>

            <hr />
        </>
    );
};

export default ProductCard;