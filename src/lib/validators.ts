import { z } from "zod";

const SpeakerSchema = z.object({
  firstName: z
    .string()
    .min(3, "You must have a length of at least 3")
    .startsWith("A", "First name must start with 'A'"),
  lastName: z.string().min(3, "You must have a length of at least 3"),
});

const SpeakersSchema = z.object({
  speakers: z.array(SpeakerSchema).min(1, "You must have at least one speaker"),
});

export { SpeakerSchema, SpeakersSchema };
