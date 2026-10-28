import InputField from "./InputField";
import SearchField from "./SearchField";

export default function InputFieldExample() {
  return (
    <>
      <InputField placeholder="Enter" />
      <InputField variant="select" defaultValue="">
        <option value="" disabled>
          Select
        </option>
        <option value="option-1">Option 1</option>
      </InputField>
      <InputField variant="date" aria-label="Date" />
      <InputField
        variant="phone"
        name="phone"
        placeholder="111-222-3333"
        aria-label="Phone number"
      />
      <InputField variant="textarea" placeholder="Type here" />
      <form role="search">
        <SearchField
          name="q"
          placeholder="Search here..."
          aria-label="Search"
        />
      </form>
    </>
  );
}
