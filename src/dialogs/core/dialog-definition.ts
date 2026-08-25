export type DialogDefinition<
  Name extends string,
  Payload = undefined,
  Result = void,
> = {
  name: Name
  payload: Payload
  result: Result
}