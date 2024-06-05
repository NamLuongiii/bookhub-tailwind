import { dumbBooks } from "@/lib";
import { Book } from "./book";
import { Feature } from "./feature";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./shared/carousel";

export interface IBookNewFeatureProps {}

export function BookNewFeature(props: IBookNewFeatureProps) {
  return (
    <Feature id="book-new-feature" title="Sách mới thêm vào hệ thống">
      <Carousel>
        <CarouselContent>
          {dumbBooks.map((book) => (
            <CarouselItem key={book.id} className="basis-1/2 lg:basis-1/4">
              <Book
                name={book.name}
                cover={book.cover}
                href={`/book/${book.id}`}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </Feature>
  );
}
