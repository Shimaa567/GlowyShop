import React from "react";
import { useSearchParams, useNavigate } from "react-router";
import { Filter, LoaderCircleIcon, Search, X } from "lucide-react";

import { ToggleGroup, ToggleGroupItem } from "../ui/toggle-group";
import { Button } from "../ui/button";

import { Input } from "../ui/input";
import type { SortOption } from "@/types";
import { Popover, PopoverTrigger, PopoverContent } from "../ui/popover";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "../ui/select";

interface FiltersProps {
  isSearching: boolean;
  categories: string[];
}
const FiltersGroup: React.FC<FiltersProps> = ({ isSearching, categories }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [isFilterOpen, setIsFilterOpen] = React.useState(false);
  const navigate = useNavigate();
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchParams((prev) => {
      prev.set("search", e.target.value);
      return prev;
    });
  };

  const search = searchParams.get("search") ?? "";
  const sort = (searchParams.get("sort") as SortOption) ?? "";
  const minPrice = searchParams.get("minPrice") ?? "";
  const maxPrice = searchParams.get("maxPrice") ?? "";
  const category = searchParams.get("category") ?? "";

  const hasActiveFilters = search || sort || maxPrice || minPrice || category;

  const handleClearAll = () => {
    setSearchParams((prev) => {
      prev.delete("search");
      return prev;
    });
    setSearchParams((prev) => {
      prev.delete("sort");
      return prev;
    });
    setSearchParams((prev) => {
      prev.delete("maxPrice");
      return prev;
    });
    setSearchParams((prev) => {
      prev.delete("minPrice");
      return prev;
    });
    setSearchParams((prev) => {
      prev.delete("category");
      return prev;
    });
    navigate("/");
  };

  return (
    <div className="flex flex-wrap items-center justify-between gap-3">
      <Input
        containerClassName="w-96"
        id="search"
        type="text"
        placeholder="Search by product title..."
        startIcon={<Search className="size-4" />}
        endIcon={
          isSearching && (
            <LoaderCircleIcon className="text-gray-500 size-5 animate-spin" />
          )
        }
        onChange={handleSearch}
        className="bg-white"
      />
      <div className="flex gap-2">
        <ToggleGroup
          type="single"
          onValueChange={(value) =>
            setSearchParams((prev) => {
              prev.set("sort", value);
              return prev;
            })
          }
        >
          {["name-asc", "name-desc"].includes(sort) ? (
            <Button
              onClick={() => {
                setSearchParams((prev) => {
                  prev.set(
                    "sort",
                    sort === "name-asc" ? "name-desc" : "name-asc"
                  );
                  return prev;
                });
              }}
              aria-label="sort name"
            >
              Sort A-Z
            </Button>
          ) : (
            <ToggleGroupItem value="name-asc" aria-label="sort name">
              Sort A-Z
            </ToggleGroupItem>
          )}

          {["price-asc", "price-desc"].includes(sort) ? (
            <Button
              onClick={() => {
                setSearchParams((prev) => {
                  prev.set(
                    "sort",
                    sort === "price-asc" ? "price-desc" : "price-asc"
                  );
                  return prev;
                });
              }}
              aria-label="sort Price"
            >
              Sort By Price
            </Button>
          ) : (
            <ToggleGroupItem value="price-asc" aria-label="sort price">
              {" "}
              Sort By Price
            </ToggleGroupItem>
          )}
        </ToggleGroup>

        <Popover open={isFilterOpen} onOpenChange={setIsFilterOpen}>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              size="sm"
              className="gap-2 bg-transparent"
            >
              <Filter className="w-4 h-4" />
              Filters
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-80" align="start">
            <div className="space-y-4">
              <div>
                <h4 className="mb-3 font-medium">Filter Products</h4>
              </div>

              {/* Price Range */}
              <div className="space-y-2">
                <h1 className="text-sm font-medium">Price Range</h1>
                <div className="flex items-center gap-2">
                  <div className="flex-1">
                    <Input
                      type="number"
                      placeholder="Min"
                      value={minPrice}
                      onChange={(e) =>
                        setSearchParams((prev) => {
                          prev.set("minPrice", e.target.value);
                          return prev;
                        })
                      }
                      min="0"
                      step="0.01"
                    />
                  </div>
                  <span className="text-muted-foreground">to</span>
                  <div className="flex-1">
                    <Input
                      type="number"
                      placeholder="Max"
                      value={maxPrice}
                      onChange={(e) =>
                        setSearchParams((prev) => {
                          prev.set("maxPrice", e.target.value);
                          return prev;
                        })
                      }
                      min="0"
                      step="0.01"
                    />
                  </div>
                </div>
              </div>

              {/* Category Filter */}
              <div className="space-y-2">
                <h1 className="text-sm font-medium">Category</h1>
                <Select
                  value={category}
                  onValueChange={(value) =>
                    setSearchParams((prev) => {
                      prev.set("category", value);
                      return prev;
                    })
                  }
                >
                  <SelectTrigger>
                    <SelectValue placeholder="All Categories" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value=" ">All Categories</SelectItem>
                    {categories.map((cat) => (
                      <SelectItem key={cat} value={cat}>
                        {cat}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <Button
                variant="outline"
                size="sm"
                className="w-full bg-transparent"
                onClick={() => {
                  setSearchParams((prev) => {
                    prev.delete("minPrice");
                    prev.delete("maxPrice");
                    prev.delete("category");
                    return prev;
                  });
                }}
              >
                Clear Filters
              </Button>
            </div>
          </PopoverContent>
        </Popover>

        {/* Clear All Button */}
        {hasActiveFilters && (
          <Button
            variant="ghost"
            size="sm"
            onClick={handleClearAll}
            className="gap-2 text-muted-foreground hover:text-foreground"
          >
            <X className="w-4 h-4" />
            Clear All
          </Button>
        )}
      </div>
    </div>
  );
};

export default FiltersGroup;
