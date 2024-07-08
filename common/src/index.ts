import z from "zod";

//Signup
export const signupInput = z.object({
    email: z.string().email(),
    password: z.string().min(6),
    name: z.string().optional()
});

export type SignupInput = z.infer<typeof signupInput>;

//SignIn
export const signinInput = z.object({
    email: z.string().email(),
    password: z.string().min(6),
});

export type SigninInput = z.infer<typeof signinInput>;

//CreateBlog
export const createBlogInput = z.object({
    title: z.string(),
    content: z.string()
});

export type CreateBlogInput = z.infer<typeof createBlogInput>;

//UpdateBlog
export const updateBlogInput = z.object({
    title: z.string(),
    content: z.string(),
    id: z.number()
});

export type UpdateBlogInput = z.infer<typeof updateBlogInput>;