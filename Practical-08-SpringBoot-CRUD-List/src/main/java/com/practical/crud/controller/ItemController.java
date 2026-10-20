package com.practical.crud.controller;

import com.practical.crud.model.Item;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/api/items")
@CrossOrigin(origins = "*")
public class ItemController {

    private final List<Item> items = new ArrayList<>();
    private long nextId = 1;

    public ItemController() {
        items.add(new Item(nextId++, "Item 1"));
        items.add(new Item(nextId++, "Item 2"));
    }

    @GetMapping
    public List<Item> getAllItems() {
        return items;
    }

    @PostMapping
    public Item addItem(@RequestBody Item item) {
        item.setId(nextId++);
        items.add(item);
        return item;
    }

    @DeleteMapping("/{id}")
    public String deleteItem(@PathVariable Long id) {
        items.removeIf(item -> item.getId().equals(id));
        return "Item deleted successfully";
    }
}
