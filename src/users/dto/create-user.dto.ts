export class CreateUserDto {
  name: string;
  email: string;
}

export class GetUsersDto {
  offset: number;
  limit: number;
}
