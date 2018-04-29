import parse from "parse-link-header";

export const parseNavLink = ({ link }) => {
  const parsedLink = parse(link);
  if (link) {
    return {
      next: parsedLink.next ? parsedLink.next.url : null
    };
  }
};

export const getTotalCount = header => {
  const totalCount = header["x-total-count"];
  return Number.parseInt(totalCount) || 0;
};
