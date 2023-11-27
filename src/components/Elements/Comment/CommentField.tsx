import { Button, TextField } from "..";

export const CommentField = () => {
  return (
    <form
      action=""
      className="flex flex-col gap-3"
    >
      <TextField placeholder="Share your thoughts about this product here" />
      <Button
        type="submit"
        variant="outlined"
      >
        Comment
      </Button>
    </form>
  );
};
