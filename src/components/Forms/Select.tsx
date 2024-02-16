export function Select({ register, options, name, ...rest }: any) {
  return (
    <select {...register(name)} {...rest}>
      {options.map((option: any) => (
        <option value={option.name} key={option.id}>
          {option.name}
        </option>
      ))}
    </select>
  );
}
