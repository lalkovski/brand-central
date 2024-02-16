export function Textarea({ register, name, ...rest }: any) {
  return <textarea {...register(name)} {...rest} />;
}
