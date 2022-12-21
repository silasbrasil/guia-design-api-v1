import {
  Body,
  Controller,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { FindAllQuery } from '../queries';
import { CreateAddressDto, UpdateAddressDto } from './dtos';

@Controller({
  version: '1',
  path: 'users/:userId/addresses',
})
export class AddressController {
  @Post()
  create(@Body() createAddressDto: CreateAddressDto) {}

  @Get()
  findAll(@Param() params: any, @Query() findAllQuery: FindAllQuery) {
    console.log(findAllQuery);
    console.log(params);

    return {
      result: [],
      nextPageToken: 'sdadasdasda',
    };
  }

  @Get(':id')
  findOne(@Param() params: any, @Query() findAllQuery: FindAllQuery) {
    console.log(findAllQuery);
    console.log(params);

    return {
      result: [],
      nextPageToken: 'sdadasdasda',
    };
  }

  @Patch(':id')
  update(@Body() updateAddressDto: UpdateAddressDto) {}
}
