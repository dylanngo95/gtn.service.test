"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const tsoa_1 = require("tsoa");
let AccountsController = class AccountsController {
    /** Get the current account */
    current() {
        return __awaiter(this, void 0, void 0, function* () {
            return {
                id: 600,
                name: "test"
            };
        });
    }
    /** Get a list of users for the account */
    getUsers() {
        return __awaiter(this, void 0, void 0, function* () {
            return [
                {
                    createdAt: new Date(),
                    email: "test@test.com",
                    id: 1
                },
                {
                    createdAt: new Date(),
                    email: "test2@test2.com",
                    id: 2
                }
            ];
        });
    }
};
__decorate([
    tsoa_1.Get("Current"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AccountsController.prototype, "current", null);
__decorate([
    tsoa_1.Get("Users"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AccountsController.prototype, "getUsers", null);
AccountsController = __decorate([
    tsoa_1.Route("Accounts")
], AccountsController);
exports.AccountsController = AccountsController;
