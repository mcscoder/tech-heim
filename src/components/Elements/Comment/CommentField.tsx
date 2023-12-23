import { useProductDetailContext } from "@/hooks";
import { Button, TextField } from "..";
import { useState } from "react";

export const CommentField = () => {
  const { handlePostComment } = useProductDetailContext();

  const [description, setDescription] = useState<string>();

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log(description);

    if (description) {
      handlePostComment(description);
    }
  };

  return (
    <form
      onSubmit={(e) => handleFormSubmit(e)}
      className="flex flex-col gap-3"
    >
      <TextField
        placeholder="Share your thoughts about this product here"
        onChange={(e) => setDescription(e.target.value)}
      />
      <Button
        type="submit"
        variant="outlined"
      >
        Comment
      </Button>
    </form>
  );
};
