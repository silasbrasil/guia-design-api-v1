import { Controller, Get, Param, Query } from '@nestjs/common';
import { FindAllQuery } from '../queries';

@Controller({
  version: '1',
  path: 'users/:userId/addresses'
})
export class AddressController {

  @Get()
  findAll(@Param() params: any, @Query() findAllQuery: FindAllQuery) {
    console.log(findAllQuery);
    console.log(params);

    return {
      result: [],
      nextPageToken: 'sdadasdasda'
    };
  }

  @Get(':id')
  findOne(@Param() params: any, @Query() findAllQuery: FindAllQuery) {
    console.log(findAllQuery);
    console.log(params);

    return {
      result: [],
      nextPageToken: 'sdadasdasda'
    };
  }
}
