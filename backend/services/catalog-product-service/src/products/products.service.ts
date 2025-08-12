import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Repository } from "typeorm";
import { Products } from "./entities/products.entity";
import { InjectRepository } from "@nestjs/typeorm";

@Injectable()
export class ProductsService {

  constructor(
      @InjectRepository(Products)
      private productsRepository: Repository<Products>) {}

  create(createProductDto: CreateProductDto) {
    // return 'This action adds a new product';
    return this.productsRepository.create(createProductDto);
  }

  async findAll() {
    //return `This action returns all product`;
    return await this.productsRepository.find();
  }

  findOne(id: number) {
    // return `This action returns a #${id} product`;
    return this.productsRepository.findOneBy({id: id});
  }

  update(id: number, updateProductDto: UpdateProductDto) {
    return `This action updates a #${id} product`;
    //return this.productsRepository.save({id: id}, updateProductDto);
  }

  remove(id: number) {
    return `This action removes a #${id} product`;
    //return this.productsRepository.remove(id);
  }
}
